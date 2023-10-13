interface Usuario {
  nombreUsuario: string;
  pasword: string;
  confirmarPasword?: string;
}

let usuario1: Usuario = {
  nombreUsuario: "edwin",
  pasword: "123",
  confirmarPasword: "123",
};
console.log(usuario1);
console.log(usuario1.nombreUsuario);

interface Abordar {
  abordarTranspoete(): void;
}

let avion: Abordar = {
  abordarTranspoete: function () {
    console.log("abordando");
  },
};

avion.abordarTranspoete();
