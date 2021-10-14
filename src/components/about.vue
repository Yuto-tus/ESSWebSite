<template>
    <v-container>
        <div class="carousel">
        <div class="carousel__main">
            <div class="carousel__left">
                <button class="carousel__button" type="button" @click="prev">prev</button>
            </div>
            <div class="carousel__center">
                <transition-group tag="div" class="carousel__slider" :name="style">
                    <div v-for="number in [currentImg]" v-bind:key="number">
                      <img :src="imgList[Math.abs(currentImg) % imgList.length]" class="carousel__img" width="300" height="200"/>
                    </div>
                </transition-group>
            </div>
            <div class="carousel__right">
                <button  class="carousel__button" type="button" @click="next">next</button>
            </div>
        </div>
        <div class="carousel__footer">
            <span class="carousel__dot" v-for="(number, index) in imgList.length" v-bind:class="{'is-active':index == (Math.abs(currentImg) % imgList.length)}">●</span>
        </div>
    </div>
    </v-container>
</template>
