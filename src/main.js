let template = `
    <select class="test-change">
        <option value="1">1</option>
        <option value="2">2</option>
    </select>
    <button class="test-click">click me</button>
`

class ConstructorBased extends Backbone.View {
    constructor() {
        super({
            events: {
                'change .test-change': 'testChange',
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
            'change .test-change': 'testChange',
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

let Classic = Backbone.View.extend({
    template: template,
    el: '#app3',
    events: {
        'change .test-change': 'testChange',
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
let app3 = new Classic()
