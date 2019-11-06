import Vue from 'vue';

const common = {
    formatCurrency(data){
            let gold=0,silver=0,copper=parseInt(data);
            if(copper>=100){
                silver = parseInt(copper/100);
                copper = parseInt(copper%100);
                if(silver>=100){
                    gold = parseInt(silver/100);
                    gold = parseInt(silver%100);
                }
            }
            return `${gold}金${silver}银${copper}铜`;
    }
};

Vue.prototype.common = common;