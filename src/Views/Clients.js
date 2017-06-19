APP.Views = APP.Views || {};

(function () {

    APP.Views.ClientsView = Backbone.View.extend({
        //template: JST['tpl/HomeView.html'],
        el: '#chart_section',
        events: {
            "click #btn-submitSignup": "signup"
        },
        initialize: function () {
            this.render();
        },

        render: function () {
            //tuflog(this);
            var that = this;
            $.get('/tmpl/Clients.html', function (data) {
                template = _.template(data, {});
                that.$el.html(template(that.model.toJSON()));
                that.drawPieGraph();
                that.drawBarGraph();
            }, 'html');

            return this;
        },
        drawPieGraph: function () {
            var defCanvasWidth = 1200;
            var defCanvasHalfWidth = 400;
            var defCanvasHeight = 600;

            var mydata = {
                labels: [""],
                datasets: [
                    {
                        data: [this.model.get("activeClients")],
                        fillColor: "#69a3e5",
                        title: "data1"
                    },
                    {
                        data: [this.model.get("totalClients") - this.model.get("activeClients")],
                        fillColor: "#596169",
                        title: "data2"
                    }

                ],
                shapesInChart: [
                    {
                        position: "RELATIVE",
                        shape: "TEXT",
                        text: this.model.get("activeClients"),
                        x1: 2.0,
                        y1: 2.0,
                        textAlign: "center",
                        textBaseline: "middle",
                        fontColor: "#69A3E5",
                        fontSize: 28,
                        fontFamily : "'Quicksand'",
                        fontStyle : "normal"
                                            }
                ],

            };

            var opt = {
                startAngle: 180,
                totalAmplitude: 180,
                endDrawDataFunction: drawShapes,
                canvasBorders: false,
                segmentShowStroke: false,
                inGraphDataShow: false,
                responsive: true,
                maintainAspectRatio: true,
                responsiveMaxHeight: 250,
                spaceTop: 5
            }
            var myLine = new Chart(document.getElementById("chartJs").getContext("2d")).Doughnut(mydata, opt);
        },
        drawBarGraph: function () {

            var data = this.model.get("recentMonths");
            var dataValues1 = [];
            var dataValues2 = [];
            var dataValues3 = [];

            for (i = 0; i < 12; i++) {
                dataValues1.push(parseInt(data[i].activeClients));
                dataValues2.push(parseInt(data[i].totalClients));
                dataValues3.push((data[i].name));
            }

            var mydata = {
                labels: dataValues3,
                datasets: [
                    {
                        fillColor: "#69A3E5",
                        strokeColor: "#69A3E5",
                        pointColor: "#69A3E5",
                        data: dataValues1,
                    },
                    {
                        fillColor: "#596169",
                        strokeColor: "#596169",
                        data: dataValues2,
                    }
                ]
            };

            var opt1 = {
                canvasBorders: false,
                inGraphDataShow: false,
                annotateDisplay: true,
                graphTitleFontSize: 18,
                responsive: true,
                maintainAspectRatio: true,
                responsiveMaxHeight: 150,
                spaceTop: 5,
                responsiveMinHeight: 350,
                xAxisBottom: false,
                xAxisTop: false,
                yAxisLeft: false,
                yAxisRight: false,
                maxBarWidth: 50,
                scaleShowGridLines: false,
                scaleOverride: true,
                scaleStartValue: 0,
                scaleSteps: 15,
                scaleStepWidth: 15,
                graphMax: 200

            };

            var myLine = new Chart(document.getElementById("barCharts").getContext("2d")).StackedBar(mydata, opt1);


        }

    });

})();
