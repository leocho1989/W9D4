class DOMNodeCollection {
constructor(array) {
    this.array = array;
    }

    html(html) {
        if (typeof html === 'string') {
            this.each((node) => {
                node.innerHTML = html;
            });
        } else if (this.array.length > 0) {
            return this.array[0].innerHTML;
             }
             
        }

    empty() {
        this.html('');
         }
}



module.exports = DOMNodeCollection;