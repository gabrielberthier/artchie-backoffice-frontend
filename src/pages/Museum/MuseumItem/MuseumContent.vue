<template>
  <div class="container__content">
    <h1 class=" text-h4 ellipsis">Museum do Forte </h1>

    <div class="ellipsis text-subtitle1">
       Museu em SLZ - MA 
    </div>

    <p class="text-description">
      O Forte de Santo Antônio da Barra localiza-se na ponta de João Dias, atual
      Ponta d'Areia, a sudoeste do Forte de São Marcos, dominando a barra do
      canal de acesso ao porto de São Luís, no litoral do estado do Maranhão, no
      Brasil.
    </p>

    <div class="date-museum">Inclusão: 25/04/2021</div>
  </div>
</template>

<style scoped>
.title {
  font-size: 1.5rem;
  margin: 15px 0;
  line-height: 4rem;
  font-weight: 600;
}

.container__content {
  /* Take the remaining width */
  flex: 1;
  padding: 0px 17px;
  z-index: 3;
  min-width: 350px;
}

.container__content .text-description {
  font-size: 1rem;
  color: #444;
  font-weight: 300;
  margin: 20px 0;
}

.date-museum {
  color: #333;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 15px;
}

@media only screen and (max-width: 600px) {
  .container__content {
    background-color: #f3f3f3;
  }
}
</style>
