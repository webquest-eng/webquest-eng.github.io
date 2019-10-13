
Vue.directive('focus', {
    // Когда привязанный элемент вставлен в DOM...
    inserted: function (el) {
        // Переключаем фокус на элемент
        el.focus()
    }
})

var app = new Vue({
    el: '#main',
    data: {
        show: 0,
        blurType: 'none',
        dialog_animation: false,
        name: '',
        form: '',
        check1: false,
        check2: false,
        check3: false,
        check4: false,
        check5: false,
        check6: false,
        check7: false,
        check8: false,
        check9: false,
        check10: false,
        points: 0,
        score: 0
    },
    methods: {
        renderType(data) {

            if (data == 1) {
                this.show = 1;
                this.blurType = 'none';
            }
            else if (data == 2) {
                this.show = 2;

            }
            else if (data == 3) {
                this.show = 3;
                this.blurType = 'blur(40px)';
                this.dialog_animation = true
            }
            else if (data == 4) {
                this.show = 4;
            }
            else if (data == 5) {
                this.show = 5;
                this.check1 == true ? this.points++ : this.points--;
                this.check2 == true ? this.points++ : this.points--;
                this.check3 == true ? this.points++ : this.points--;
                this.check4 == true ? this.points++ : this.points--;
                this.check5 == true ? this.points++ : this.points--;
                this.check6 == true ? this.points++ : this.points--;
                this.check7 == true ? this.points++ : this.points--;
                this.check8 == true ? this.points++ : this.points--;
                this.check9 == true ? this.points++ : this.points--;
                this.check10 == true ? this.points++ : this.points--;
            }
            else if (data == '5+') {
                this.points++;
                this.show = 6;
            }
            else if (data == '5-') {
                this.show = 6;
            }
            else if (data == '6+') {
                this.points++;
                this.show = 7;
            }
            else if (data == '6-') {
                this.show = 7;
            }
            else if (data == '7+') {
                this.points++;
                this.show = 8;
            }
            else if (data == '7-') {
                this.show = 8;
            }
            else if (data == '8-') {
                this.show = 9;
            }
            else if (data == '8+') {
                this.points++;
                this.show = 9;
            }
            else if (data == '9-') {
                this.show = 10;
            }
            else if (data == '9+') {
                this.points++;
                this.show = 10;
            }
            else if (data == '10-') {
                if (this.points >= 11) this.score = 5;
                else if(this.points > 8 && this.points < 11) this.score = 4;
                else if(this.points > 5 && this.points < 8)  this.score = 3;
                else this.score = 2;
                this.show = 11;
                
            }
            else if (data == '10+') {
                this.show = 11;
                if (this.points >= 11) this.score = 5;
                else if(this.points > 8 && this.points < 11) this.score = 4;
                else if(this.points > 5 && this.points < 8)  this.score = 3;
                else this.score = 2;
                this.points++;
                
            }
        }
    }
})
