let template = `<button class="test-click">click me</button>`

class ConstructorBased extends Backbone.View {
    constructor() {
        super({
            events: {
                'click .test-click': 'testClick',
            }
        })
        this.template = template
        this.$el = $('#app1')

        this.render()
    }

    render() {
        this.$el.html(this.template)
    }

    testChange() {
        console.log("change")
    }

    testClick() {
        console.log("click")
    }
}

class InitializeBased extends Backbone.View {
    get events() {
        return {
            'click .test-click': 'testClick',
        }
    }

    initialize(params) {
        this.template = template
        this.$el = $('#app2')

        this.render()
    }

    render() {
        this.$el.html(this.template)
    }

    testChange() {
        console.log("change")
    }

    testClick() {
        console.log("click")
    }
}

let ClassicApproach = Backbone.View.extend({
    template: template,
    el: '#app3',
    events: {
        'click .test-click': 'testClick',
    },

    initialize() {
        this.render()
    },

    render() {
        this.$el.html(this.template)
    },

    testChange() {
        console.log("change")
    },

    testClick() {
        console.log("click")
    }
})

let app1 = new ConstructorBased({})
let app2 = new InitializeBased({})
let app3 = new ClassicApproach()
