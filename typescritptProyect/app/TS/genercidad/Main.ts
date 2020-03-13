import { CUsuario } from './CUsuario'
import { CGenericRepo } from './CGenericRepo'
import { IEntity } from './IEntity'

let user1: CUsuario = new CUsuario(1, "M", "Ramon", 70, "Marine", "Cubano")
let user2: CUsuario = new CUsuario(2, "M", "Paco", 54, "Cocinero", "Cubano")
let user3: CUsuario = new CUsuario(3, "F", "Yania", 22, "Moza", "Cubano")
let user4: CUsuario = new CUsuario(4, "F", "Lili", 33, "Tester", "Cubano")
let user5: CUsuario = new CUsuario(5, "M", "Henry", 33, "Desarrollador", "Cubano")
let user6: CUsuario = new CUsuario(6, "F", "Martha", 65, "Doctora", "Cubano")
let user7: CUsuario = new CUsuario(7, "M", "Julio", 24, "Merolico", "Cubano")
let user8: CUsuario = new CUsuario(8, "F", "Lucresia", 80, "Dulcera", "Cubano")
let container: CGenericRepo<IEntity> = new CGenericRepo([])

container.Agregar(user1);
container.Agregar(user2);
container.Agregar(user3);
container.Agregar(user4);
container.Agregar(user5);
container.Agregar(user6);
container.Agregar(user7);
container.Agregar(user8);
////////////////////////////////////////////////

let user9: CUsuario = new CUsuario(7, "M", "Julieta", 40, "puta", "Cubana")



console.log(container.Actualizar(user9));
console.log(container.Eliminar(user2.getId()));
console.log(container.Obtener(user6.getId()));
