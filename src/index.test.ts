// import  sum  from "./app";
import app from "./index"
import  request  from "supertest";

describe('checking the first',()=>{
    it("first case is running",()=>{
        console.log("running")
    })
})

// describe('add',()=>{
//     test("checking add of two numbers",()=>{
//         expect(sum(1,2)).toBe(3)
//     })
// })
describe('check api',()=>{
    afterAll(done => {
        // app.off();
        done();
    });
    
    test("api should match hello world", async ()=>{
        let data= await request(app).get('/')
        expect(data.body).toEqual(expect.arrayContaining([
            expect.objectContaining({
                name:expect.any(String),
                id:expect.any(Number)
            })
        ]))
        // console.log(data.body);
        
        expect(data.status).toBe(200)
    })
})