import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;

export async function generateHash (password): Promise<string> { 
   return await bcrypt.hash(password, saltOrRounds)
}
export async function compare ({ password, hashedPassword }): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword)
}

// export async function generateRandomHash (size = 64) {
//     crypto.randomBytes(size).toString('hex')
// }