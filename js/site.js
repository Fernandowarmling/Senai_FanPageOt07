function validaFaleConosco(){

/* valdia nome */
    if(document.frmContato.txtnome.value ==""){
        alert("Preencha o campo Nome");
        document.frmContato.txtnome.focus();
        return false;
    }

/* valida telefone */
    if(document.frmContato.txtfone.value == ""){
        alert("Preencha o campo Telefone");
        document.frmContato.txtfone.focus();
        return false;
    }

/* valida e-mail */
    if (document.frmContato.txtemail.value ==""){
        alert("Preencha o campo E-mail");
        document.frmContato.txtemail.focus();
        return false;

    }

/* valida data */ 
    if(document.frmContato.txtdate.value <= 01/01/1900 ){
        alert("Preencha o campo Data");
        document.frmContato.txtdate.focus();
        return false;
    }

/*valida opção de sexo */
    if(document.frmContato.sexo.value ==""){
        alert("Preencha o campo Sexo");
        document.frmContato.txtdate.focus();
        return false;
    }

/* valida associação */
    var check = false
    if(document.getElementById("associar").checked){
    check = true
    }
    
    if (check == false){
        alert("Preencha o campo de Associção")
        return false
    }

/* valida comentario */
    if(document.frmContato.selmotivo.value !=""){
        if(document.frmContato.txacomentario.value ==""){
            alert("Preencha o campo Comentario");
            document.frmContato.txtdate.focus();
            return false;
        }
    }

    


}

