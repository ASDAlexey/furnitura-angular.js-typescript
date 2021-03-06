HTMLCollection.prototype.forEach=Array.prototype.forEach;
NodeList.prototype.forEach=Array.prototype.forEach;
NodeList.prototype.filter = Array.prototype.filter;
HTMLElement.prototype.index=function(){
    var self=this,
        parent=self.parentNode,
        i=0;
    while(self.previousElementSibling){
        i++;
        self=self.previousElementSibling
    }
    return this===parent.children[i]?i:-1;
};
// ��������� ���������
if(!Element.prototype.matches){
    // ���������� ��������
    Element.prototype.matches=Element.prototype.matchesSelector||
        Element.prototype.webkitMatchesSelector||
        Element.prototype.mozMatchesSelector||
        Element.prototype.msMatchesSelector
}
if(!Element.prototype.closest){
    // ���������
    Element.prototype.closest=function(css){
        var node=this;

        while(node){
            if(node.matches(css)) return node;
            else node=node.parentElement;
        }
        return null;
    };
}
if(!Node.prototype.remove){
    Node.prototype.remove=function(removeChildren){
        this.parentNode&&this.parentNode.removeChild(this);
    };
}