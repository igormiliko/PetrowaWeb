<template>
 <div id="home" v-if="!showContent">
	<div class="d-flex text-center">
			<v-img
			width="100%"
			height="100vh"
			class="d-flex align-center justify-center"
			src="../assets/homeBanner1.jpg">
			<p class="line typing-animation">Conectando <br>pensamentos com:</p>
			<div>				
				<v-img class="mx-auto fundo" width="75%" src="../assets/LogoTitle.svg" />
			</div>
			</v-img>
	</div>
	<div>
		<v-img
			width="100%"
			height="100vh"
			class="d-flex pr-8 pl-8 align-center justify-center"
			src="../assets/background-section2-0.jpg">
			<v-container class="d-flex flex-column justify-center">				
				<div class="mx-auto" width="320px">
					<h1 class="title-section">Cansado de layout padrão?</h1>
					<p class="text-section2 mt-8">Buscamos excelência no que fazemos. Nos adequamos à cada projeto e oportunidade. Buscamos crescer juntamente com você, a fim de que alcançemos novos horizontes. Sustentamos todas nossas decisões em nossos valores:</p>
				</div>
				<div class="mx-auto">
					<octaValues/>
				</div>
				<v-btn color="success" elevation="2">Inspire-se</v-btn>
			</v-container>
			</v-img>
	</div>
	<div>	
		<v-img
			width="100%"
			class="d-flex align-center justify-center"
			src="../assets/backCube.jpg">
			<h2 class="title-section2">Conheça mais sobre a <strong>Petrowa Web!</strong></h2>
			<v-container class="d-flex flex-column flex-md-row justify-center align-center justify-sm-space-around">				
				<div>
					<div class="mt-16 img-container">
						<v-img src="../assets/servicos.jpg" class="cardRound text-center align-center mx-auto d-flex">
							<v-btn x-large color="success" elevation="2">Nossos Serviços</v-btn>
						</v-img>
					</div>
					<div class="mt-16 img-container">
						<v-img src="../assets/orcamento.jpg" class="cardRound text-center align-center mx-auto d-flex">
							<v-btn x-large color="success" elevation="2">Faça um orçamento</v-btn>
						</v-img>
					</div>
				</div>
				<div>
					<div class="mt-16 img-container">
						<v-img src="../assets/nossaEquipe3.jpg" class="cardRound text-center align-center mx-auto d-flex">
							<v-btn x-large color="success" elevation="2">Nossa equipe</v-btn>
						</v-img>
					</div>
					<div class="mt-16 img-container" >
						<v-img src="../assets/aboutUs.jpg" class="cardRound text-center align-center mx-auto d-flex">
							<v-btn x-large color="success" elevation="2">Sobre nós</v-btn>
						</v-img>
					</div>
				</div>
			</v-container>
			<h3 class="title-section2 mt-16">Nós criamos websites com:</h3>
		</v-img>
	</div>
	<div>	
		<v-img
			width="100%"
			class="pt-16 pb-16 d-flex align-center justify-center"
			src="../assets/sectionHome4.png">
			<v-container class="d-flex flex-column flex-md-row justify-center align-center justify-sm-space-around">				
				<div class="d-flex flex-row">
					<div class="img-round-container"></div>
					<div class="img-round-container"></div>
					<div class="img-round-container"></div>
					<div class="img-round-container"></div>
				</div>
				<div class="">
					<div class="img-round-container"></div>
					<div class="img-round-container"></div>
					<div class="img-round-container"></div>
					<div class="img-round-container"></div>
				</div>
				<div class="">
					<div class="img-round-container"></div>
					<div class="img-round-container"></div>
					<div class="img-round-container"></div>
					<div class="img-round-container"></div>
				</div>
			</v-container>

		</v-img>
	</div>
 </div>
</template>

<script>
import octaValues from '../components/octaValues.vue'
export default {
  name: 'Home',
  components: {
	octaValues
	},
  data(){
		return {
			showContent: true,
		}
	},
	mounted(){
    if(this.showContent) this.showToggleContent()
	},
	methods: {
		showToggleContent(){
			setTimeout(() => {
				this.showContent = false
			},9700)
		}
	}
}
</script>
<style scoped>
.text-section2{
	color: #171d35;
	text-align: center;
	font-size: 12pt;
}
.title-section{
	color: #f00;
	font-family: 'Megrim', cursive;
	font-size: 35px;
	text-align: center;
}
.title-section2{
	color: #fff;
	font-family: 'Megrim', cursive;
	font-size: 35px;
	text-align: center;
}
strong{
	color: #f00;
	font-family: 'Megrim', cursive;
	font-size: 35px;
	text-align: center;
}
.typing-animation{
	animation: typing 4s steps(40) 1s normal both;
}
.line{
	position: absolute;
	top: 20%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%) ;
	font-family: 'Megrim', cursive;
	font-size: 2em;
	color: white;
	margin-top: 0;
	white-space: nowrap;
	overflow: hidden;
}
.fundo {
	animation: softPlus 4s;
}
.img-round-container{
   width: 20vh;
   height: 20vh;
   overflow: hidden;
   border-radius: 100%;
   background-color: white;
}
.img-container{
   width: 40vh;
   height: 40vh;
   overflow: hidden;
   border-radius: 10px;
}

.img-container .cardRound{
   width: 100%;
   height: 100%;
   -webkit-transition: -webkit-transform .5s ease;
   transition: transform .5s ease;
}

.img-container:hover .cardRound{
   -webkit-transform: scale(1.1);
   transform: scale(1.1);
}
@keyframes typing {
	from{
		width: 0;
	}
	to{
		width: 15em;
	}
}
@keyframes fundo {
	0% {
     transform: perspective(0) rotateY(0deg);
  }
  50% {
     transform: perspective(7.5cm) rotateY(5deg) rotateX(-5deg);
  }
  25% {
     transform: perspective(7.5cm) rotateY(-5deg) rotateX(5deg);
  }
  100% {
     transform: perspective(0) rotateY(0deg) rotateX(0deg);
  }
}
@keyframes softPlus {
	0% {
		opacity: 0;
		transform: scale(0%);
	}
	80%{
		opacity: 1;
		transform: scale(110%)
	}
	100%{
		opacity: 1;
		transform: scale(100%)
	}
}
</style>