export default class Option {
    constructor () {
    }

    option () {
        let options = {
            // позицияя камеры по осям
            camera_position_x: 30,
            camera_position_y: 30,
            camera_position_z: 30,
            // число кубов
            number_of_cubes: {x: 20, y: 20, z: 20},
            // расстояние мужду кубами
            distance: 1,
            // размер сторон кубов
            geometry: 1,
        }

        return options
    }
}