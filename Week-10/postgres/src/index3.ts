import {Client} from "pg"

const getData = async(email:string) =>{
    const client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: 'dbms@2024',
    });
    try {
        await client.connect()
        const query = "select * from users where email = $1"
        const values = [email]
        const result = await client.query(query,values)
        if(result.rows.length > 0){
            console.log(result.rows[0])
            return result.rows[0]
        }
        else{
            console.log("user not found")
        }

    } catch (error) {
        console.log(error)
    }
}

getData('user5@example.com').catch(console.error);