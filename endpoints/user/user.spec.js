
const UserController = require('./userController');

describe("Endpoints", () => { 

    describe("user", () => {

        describe("get", () => { 

            it("return to user json", async () => {
                const axios = {
                    get: jest.fn().mockResolvedValue({ data : 1 }),
                }
                const res = {
                    status: jest.fn().mockReturnThis(),
                    send: jest.fn()
                }
                await UserController(axios).getUser({},res);
                expect(res.status.mock.calls).toEqual([[200]]);
                expect(res.send.mock.calls).toEqual([[1]]);
            });
        });

        describe("post", () => { 
            it("creates a resource",async () => { 
                const axios = {
                    post: jest.fn().mockResolvedValue({ data: 1 })
                }

                const res = {
                    status: jest.fn().mockReturnThis(),
                    send: jest.fn()
                }

                const req = {
                    body:"request body",
                }

                await UserController(axios).createdUser(req, res);
                expect(res.status.mock.calls).toEqual([[201]]);
                expect(res.send.mock.calls).toEqual([[1]]);

                expect(axios.post.mock.calls).toEqual([
                    ['https://jsonplaceholder.typicode.com/users', 'request body']
                ]);

            });
        });

        describe("put", () => { 

            it("update resource", async () => { 

                const axios = {
                    put: jest.fn().mockResolvedValue({ data : 1 }),
                }

                const res = {
                    sendStatus: jest.fn(),
                    send: jest.fn()
                }

                const req = {
                    body: "request body",
                    params: {
                        id:"12"
                    },
                }
                await UserController(axios).updateUser(req, res);

                expect(axios.put.mock.calls).toEqual([
                    ['https://jsonplaceholder.typicode.com/users/12', 'request body']
                ]);

                expect(res.sendStatus.mock.calls).toEqual([
                    [ 204 ]
                ]);

            });
        });

        describe("delete", () => { 
            it('delete a resource', async () => {
                const req = {
                    params: {
                        id: 54
                    }
                }

                const res = {
                    sendStatus: jest.fn()
                }

                const axios = {
                    delete: jest.fn()
                }

                await UserController(axios).deleteUser(req, res);

                expect(axios.delete.mock.calls).toEqual([
                    [`https://jsonplaceholder.typicode.com/users/54`]
                ]);

                expect(res.sendStatus.mock.calls).toEqual([
                    [204]
                ]);

            });
        })
    });

});