import {beforeEach,describe,expect,it,vi} from "vitest";
import {createHmac} from "node:crypto";
import {verifyTwitch,voteChoice} from "../lib/crowdquest";
beforeEach(()=>{vi.unstubAllGlobals();process.env.SESSION_SECRET="test-session-secret-with-at-least-32-characters";process.env.TWITCH_WEBHOOK_SECRET="test-webhook-secret-with-at-least-32-characters";});
describe("Twitch event integrity",()=>{
 function headers(raw:string,time=new Date().toISOString()){const h=new Headers({"twitch-eventsub-message-id":"evt-1","twitch-eventsub-message-timestamp":time});h.set("twitch-eventsub-message-signature","sha256="+createHmac("sha256",process.env.TWITCH_WEBHOOK_SECRET!).update("evt-1"+time+raw).digest("hex"));return h;}
 it("accepts authentic raw-body signatures",()=>expect(verifyTwitch(headers("{}"),"{}")).toBe("evt-1"));
 it("rejects tampered bodies",()=>expect(()=>verifyTwitch(headers("{}"),'{"vote":"A"}')).toThrow("signature"));
 it("rejects stale signed messages",()=>expect(()=>verifyTwitch(headers("{}",new Date(Date.now()-700000).toISOString()),"{}")).toThrow("Expired"));
 it("rejects invalid timestamps",()=>expect(()=>verifyTwitch(headers("{}","bad"),"{}")).toThrow("Expired"));
 it("requires a whole explicit vote command",()=>{expect(voteChoice("!vote d")).toBe(3);expect(voteChoice("hello !vote A")).toBeNull();expect(voteChoice("!vote E")).toBeNull();});
});
