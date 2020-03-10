import Vue from 'vue'

//=======================================
// addTodoが発火
//用意してたtodosに格納
//配列todosがループしてtodoに入る
//todoからtitleとdoneを取得
//remove押されたら配列から要素を関数に渡して、検索して、消去
//
//
//
//=======================================
new Vue({ 
  el: '#app', 
  data: { 
    message: 'TODO list APP',
    newTodo:'',//箱だけ用意
    todos:[]//箱だけ用意。あとでtitleとdoneの値をpushする
  },
  methods: {

addTodo(){
  this.todos.push ({
  //配列データの末尾に任意の要素を追加する
    title:this.newTodo,
  //これが任意の要素。ループした時、値入ってくる
    done: false,
  });
  this.newTodo = '';
  console.log(this.todos)
  //送信されたら空にする

  },
  removeTodo(todo){
    const todoIndex = this.todos.indexOf(todo);
    //配列の検索
    this.todos.splice(todoIndex ,1);
    //配列から要素を削除。削除する要素の数
  },

  allDone(){
this.todos.forEach(todo => {
  todo.done= true;//todo.done
});
  },


}
});

