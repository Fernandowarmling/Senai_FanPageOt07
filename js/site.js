function validaFaleConosco() {

    /* valdia nome */

    /*if(document.frmContato.txtnome.value ==""){
        alert("Preencha o campo Nome");
        document.frmContato.txtnome.focus();
        return false;
    }*/

    var nome = document.frmContato.txtnome.value;
    var expRegNome = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");

    if (!expRegNome.test(nome)) {
        alert("Preencha o campo Nome corretamente");
        document.frmContato.txtnome.focus();
        return false;

    }

    /* valida telefone */
    /*if (document.frmContato.txtfone.value == "") {
        alert("Preencha o campo Telefone");
        document.frmContato.txtfone.focus();
        return false;
    }*/

    var fone = document.frmContato.txtfone.value;
    var expRegFone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");

    if (!expRegFone.test(fone)) {
        alert("Preencha o campo Telefone corretamente");
        document.frmContato.txtfone.focus();
        return false;
    }


    /* valida e-mail */
    /* if (document.frmContato.txtemail.value == "") {
        alert("Preencha o campo E-mail");
        document.frmContato.txtemail.focus();
        return false;

    }*/

    var email = document.frmContato.txtemail.value;
    var expRegEmail = new RegExp("^[A-z0-9._]{3,}[@]{1,}[A-z]{3,}[.com]+$");
    if (!expRegEmail.test(email)) {
        alert("Preencha o campo E-mail corrertamente");
        document.frmContato.txtemail.focus();
        return false;
    }

    /* valida data */
    if (document.frmContato.txtdate.value <= 01 / 01 / 1900) {
        alert("Preencha o campo Data");
        document.frmContato.txtdate.focus();
        return false;
    }

    /*valida opção de sexo */
    if (document.frmContato.sexo.value == "") {
        alert("Preencha o campo Sexo");
        /*document.frmContato.sexo.focus();*/
        return false;
    }

    /* valida associação */
    var check = false
    if (document.getElementById("associar").checked) {
        check = true
    }

    if (check == false) {
        alert("Preencha o campo de Associção")
        return false
    }

    /* valida comentario */
    var textocomentario = document.frmContato.txacomentario.value;
    var expRegComentario = new RegExp("^[A-zÀ-ü0-9]{3,}+$");
    if (document.frmContato.selmotivo.value != "") {
        /* if (document.frmContato.txacomentario.value == "") {
             alert("Preencha o campo Comentario");
             document.frmContato.txacomentario.focus();
             return false;
         }*/
        if (!expRegComentario.test(textocomentario)) {
            alert("Preencha o campo Comentario corrertamente");
            document.frmContato.txacomentario.focus();
            return false;
        }




    }

    /* var textocomentario = document.frmContato.txacomentario.value;
     var expRegComentario = new RegExp("^[A-zÀ-ü0-9]{3,}+$");
     if (!expRegComentario.test(textocomentario)) {
         alert("Preencha o campo Comentario corrertamente");
         document.frmContato.txacomentario.focus();
         return false;
     }*/
    return true;
}

