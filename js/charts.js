function isScrolledIntoView(elem) {


    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    if ($(elem).offset()) {

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
    } else {
        return false
    }

}


var chartpresupuestosecre = {}
var inViewpresupuestosecre = false;

function animarpresupuestosecre() {
    for (var i = 0; i < 1; i++) {
        var idElement = "presupuestosecre";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartpresupuestosecre[idElement]) { continue }
            chartpresupuestosecre[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewpresupuestosecre) { return; }
            inViewpresupuestosecre = true;
            return new Chart(ctx, {
                type:'doughnut',
                data: {

                    labels: ['C.Deliberante', 'Intendencia', 'Gobierno', 'Planif. Urbana', 'Ambiente', 'Desarrollo Social', 'Economia', 'Org. Descentralizados', 'No programaticos'],
                    datasets: [
                        {
                            tension: 0.1,
                            fill: false,
                            data: [4.09, 5.87, 14.09, 9.47, 24.37, 13.61, 7.90, 5.08, 15.74],
                            fill: true,
                            backgroundColor: ['rgba(71, 123, 168, 1)', 'rgba(105, 190, 190, 1)', 'rgba(215, 90, 218, 0.5)',



                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                                'rgba(221, 227, 146, 1)',
                                'rgba(254, 228, 64, 1)',
                                'rgba(53, 20, 49, 1)',
                                'rgba(101, 76, 79, 1)',
                            ],


                            borderWidth: 4,
                            borderColor: [

                                'rgba(114, 114, 114, 0)'
                            ],

                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        datalabels: {
                            anchor: 'end', // remove this line to get label in middle of the bar

                            formatter: (val) => (`${val}%`),
                            labels: {
                                value: {
                                    color: 'blue'
                                }
                            }

                        },

                        title: {
                            display: true,
                            text: 'Presupuesto ejecutado 2021 (%)',
                            align: 'center',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            }
                        },
                        legend: {
                            display: true,
                            position: 'right',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } }
                        },
                    },



                }
            });
        } else {
            inViewpresupuestosecre = false;
        }
    }
}
$(window).scroll(function () {

    animarpresupuestosecre();

});

$(window).load(function () {


    animarpresupuestosecre();

});


var chartrecursossecre = {}
var inViewrecursossecre = false;

function animarrecursossecre() {
    for (var i = 0; i < 1; i++) {
        var idElement = "recursossecre";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartrecursossecre[idElement]) { continue }
            chartrecursossecre[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewrecursossecre) { return; }
            inViewrecursossecre = true;
            return new Chart(ctx, {
                type: 'bar',
                data: {

                    /*labels: ['Jurisd. Comunal', 'Otras Jurisd.', 'Ant. Coparticipación', 'Rec. de capital', 'Aportes no reint.'],*/
                    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo','Junio'],
                    datasets: [
                        {
                            label: 'Recursos propios',
                            tension: 0.2,
                            fill: false,

                            data: [68.83, 81.19, 137.19, 112.42, 86.81, 103.21],

                            backgroundColor: [

                                'rgba(105, 190, 190, 1)'
                            ],

                        },
                        {
                            label: 'Coparticipación',
                            tension: 0.2,
                            fill: false,

                            data: [78.79, 91.28, 131.16, 99.98, 120.19, 97.55],

                            backgroundColor: [

                                'rgba(71, 123, 168, 1)'
                            ],


                        },
                      
                        {
                            label: 'Rec. de capital',
                            tension: 0.2,
                            fill: false,

                            data: [1.33, 1.25, 2.23, 1.61, 1.07, 1.39],

                            backgroundColor: [

                                'rgba(35, 145, 200, 1)'
                            ],

                        },
                        {
                            label: 'Aportes no reint.',
                            tension: 0.2,
                            fill: false,

                            data: [15.35, 8.70, 0, 4.45, 20.26, 23.6],

                            backgroundColor: [

                                'rgba(215, 90, 218, 1)'
                            ],

                        }


                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: { family: 'Raleway' }
                            },
                            stacked: true
                        },
                        y: {
                            ticks: {
                                font: { family: 'Raleway' },
                                maxTicksLimit: 5,
                            },
                            stacked: true,
                            font: {
                                family: 'Titillium Web'
                            },
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right',
                        align: 'middle',
                        labels: { font: { family: 'Raleway' } },
                    },
                    plugins: {
                        legend: {
                            labels: {
                                font: {
                                    family: 'Raleway'
                                }
                            }
                        },
                        title: {
                            display: true,
                            text: 'Ingresos en 2021 (en millones $)',
                            align: 'center',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                        }
                    }
                }
            });
        } else {
            inViewrecursossecre = false;
        }
    }
}
$(window).scroll(function () {

    animarrecursossecre();

});

$(window).load(function () {


    animarrecursossecre();

});


var chartpersonalsecre = {}
var inViewppersonalsecre = false;

function animarpersonalsecre() {
    for (var i = 0; i < 1; i++) {
        var idElement = "personalsecre";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartpersonalsecre[idElement]) { continue }
            chartpersonalsecre[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewppersonalsecre) { return; }
            inViewppersonalsecre = true;
            return new Chart(ctx, {
                type: 'bar',
                data: {

                    labels: ['C.Deliberante', 'Intendencia', 'Gobierno', 'Planif. Urbana', 'Ambiente', 'Desarrollo Social', 'Economia', 'Org. Descentralizados'],
                    datasets: [
                        {
                            tension: 0.1,
                            fill: false,
                            data: [32, 35, 189, 37, 283, 165, 93, 22],
                            fill: true,
                            backgroundColor: ['rgba(71, 123, 168, 1)', 'rgba(105, 190, 190, 1)', 'rgba(215, 90, 218, 0.5)',



                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],


                            borderWidth: 4,
                            borderColor: [

                                'rgba(234,238,226,0)'
                            ],

                        }
                    ]
                },
                options: {
                    scales: {
                        y: { ticks: { font: { family: 'Raleway' } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {

                        title: {
                            display: true,
                            text: 'Empleados por secretaría',
                            align: 'center',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            }
                        },
                        legend: {
                            display: false,
                            position: 'right',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } }
                        },
                    },



                }
            });
        } else {
            inViewppersonalsecre = false;
        }
    }
}
$(window).scroll(function () {

    animarpersonalsecre();

});

$(window).load(function () {


    animarpersonalsecre();

});
















var chartsayudas = {}
var inViewayudas = false;






function animarAyuda() {
    for (var i = 0; i < 1; i++) {
        var idElement = "ayudaseconomicas";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartsayudas[idElement]) { continue }
            chartsayudas[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewayudas) { return; }
            inViewayudas = true;
            return myChart = new Chart(ctx, {
                type: 'bar',
                data: {

                    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Junio'],
                    datasets: [
                        {
                            label: 'Alquiler',
                            tension: 0.2,
                            fill: false,

                            data: [112000, 291600, 174600, 394700, 432000, 356500],
                            borderColor: [

                                'rgba(105, 190, 190, 1)'
                            ],
                            backgroundColor: [

                                'rgba(105, 190, 190, 1)'
                            ],
                        },
                        {
                            label: 'Enfermedad',
                            tension: 0.2,
                            fill: false,

                            data: [26000, 43500, 42000, 65900, 57000, 82000],
                            borderColor: [

                                'rgba(71, 123, 168, 1)'
                            ],
                            backgroundColor: [

                                'rgba(71, 123, 168, 1)'
                            ],
                        },
                        {
                            label: 'Hogar',
                            tension: 0.2,
                            fill: false,

                            data: [135500, 291900, 306653, 692650, 513000, 363700],
                            borderColor: [

                                'rgba(215, 90, 218, 1)'
                            ],
                            backgroundColor: [

                                'rgba(35, 145, 200, 1)'
                            ],
                        },
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: { family: 'Raleway' }
                            },
                            stacked: true
                        },
                        y: {
                            ticks: {
                                font: { family: 'Raleway' },
                                maxTicksLimit: 5,
                            },
                            stacked: true,
                            font: {
                                family: 'Titillium Web'
                            },
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right',
                        align: 'middle',
                        labels: { font: { family: 'Raleway' } },
                    },
                    plugins: {
                        legend: {
                            labels: {
                                font: {
                                    family: 'Raleway'
                                }
                            }
                        },
                        title: {
                            display: true,
                            text: 'Subsidios a personas por concepto ($)',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                        }
                    }
                }
            });

        } else {
            inViewayudas = false;
        }
    }
}

$(window).scroll(function () {

    animarAyuda();

});

$(window).load(function () {


    animarAyuda();

});







var chartsAmbiente = {}
var InViewAmbiente = false;




function animarAmbiente() {
    for (var i = 0; i < 1; i++) {
        var idElement = "materialesAmbiente";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartsAmbiente[idElement]) { continue }
            chartsAmbiente[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (InViewAmbiente) { return; }
            InViewAmbiente = true;

            return new Chart(ctx, {
                type: 'bar',
                data: {

                    labels: ['Carton y Papeles', 'Plastico', 'Vidrio', 'Metales', 'Chatarra'],
                    datasets: [
                        {
                            data: [36800, 22060, 83785, 1850, 32680],
                            borderColor: [

                                'rgba(105, 190, 190, 1)',
                                'rgba(71, 123, 168, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],
                            backgroundColor: [

                                'rgba(105, 190, 190, 1)',
                                'rgba(71, 123, 168, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',

                            ],
                        },

                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: { family: 'Raleway' }
                            },
                            stacked: true
                        },
                        y: {
                            ticks: {
                                font: { family: 'Raleway' },
                                maxTicksLimit: 5,
                            },
                            stacked: true,
                            font: {
                                family: 'Titillium Web'
                            },
                        }
                    },
                    legend: {
                        display: false
                    },
                    plugins: {
                        legend: false,
                        title: {
                            display: true,
                            text: 'Material recuperado (kgs.)',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                        }
                    }
                }
            });

        } else {
            InViewAmbiente = false;
        }
    }
}

$(window).scroll(function () {

    animarAmbiente();

});

$(window).load(function () {


    animarAmbiente();

});


var chartsGobierno = {}
var InViewGobierno = false;

function animarGobierno() {
    for (var i = 0; i < 1; i++) {
        var idElement = "inspeccionesGobierno";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartsGobierno[idElement]) { continue }
            chartsGobierno[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (InViewGobierno) { return; }
            InViewGobierno = true;

            return new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
                    datasets: [

                        {
                            label: 'Radar',
                            data: [156, 228, 390, 606, 411, 618],
                            backgroundColor: 'rgba(71, 123, 168, 1)',
                        },
                        {
                            label: 'Domo',
                            data: [77, 45, 196, 381, 85, 88],
                            backgroundColor: 'rgba(105, 190, 190, 1)',
                        },
                        {
                            label: 'Fotomultas',
                            data: [404, 115, 270, 1899, 567, 781],
                            backgroundColor: 'rgba(215, 90, 218, 1)',
                        },


                    ]
                },
                options: {
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } }
                        },
                        title: {
                            display: true,
                            text: 'Infracciones labradas por medio',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            }
                        }
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: { family: 'Raleway' }
                            },
                            stacked: true
                        },
                        y: {
                            ticks: {
                                font: { family: 'Raleway' },
                                maxTicksLimit: 5,
                            },
                            stacked: true,
                            font: {
                                family: 'Titillium Web'
                            },
                        }
                    }
                }
            });
        } else {
            InViewGobierno = false;
        }
    }
}

$(window).scroll(function () {

    animarGobierno();

});

$(window).load(function () {


    animarGobierno();

});




var chartsIntendencia = {}
var InViewIntendencia = false;

function animarIntendencia() {
    for (var i = 0; i < 1; i++) {
        var idElement = "legalesIntendencia";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartsIntendencia[idElement]) { continue }
            chartsIntendencia[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (InViewIntendencia) { return; }
            InViewIntendencia = true;


            return new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Resoluciones', 'Disposiciones', 'Proyectos de Ordenanzas', 'Ordenanzas Promulgadas'],
                    datasets: [

                        {
                            data: [2213, 28, 51, 49],
                            backgroundColor: [
                                'rgba(71, 123, 168, 1)',
                                'rgba(105, 190, 190, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(153, 070, 135,1)',
                                'rgba(240, 150, 145,1)',
                                'rgba(35, 145, 200,1)',],
                            borderWidth: 0
                        },


                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Actividades de Asesoría Legal',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                            legend: {
                                display: true,
                                position: 'right',
                                align: 'middle',
                                labels: { font: { family: 'Raleway' } }
                            }
                        },

                        legend: {
                            display: true,
                            position: 'right',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } },
                        },

                        scales: {
                            xAxes: [{
                                grid: {
                                    display: false,
                                },
                            }]
                        }
                    }
                }
            });

        } else {
            InViewIntendencia = false;
        }
    }
}

$(window).scroll(function () {

    animarIntendencia();

});

$(window).load(function () {


    animarIntendencia();

});

var chartscordones = {}
var inViewcordones = false;

function animarcordones() {
    for (var i = 0; i < 1; i++) {
        var idElement = "cordones";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartscordones[idElement]) { continue }
            chartscordones[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewcordones) { return; }
            inViewcordones = true;
            return new Chart(ctx, {
                type: 'bar',
                data: {

                    labels: ['Norte', 'Ranqueles/E.&Prog.', 'Universitario', 'Federal Bicentenario'],
                    datasets: [
                        {
                            data: [2339.5, 2560, 806, 821.5],
                            borderColor: [

                                'rgba(105, 190, 190, 1)',
                                'rgba(71, 123, 168, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],
                            backgroundColor: [

                                'rgba(105, 190, 190, 1)',
                                'rgba(71, 123, 168, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',

                            ],
                        },

                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { ticks: { font: { family: 'Raleway' } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Ejecución de cordón cuneta por barrio (mts.)',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                        },
                        legend: {
                            display: false
                        },
                    }
                }
            });
        } else {
            inViewayudas = false;
        }
    }
}
$(window).scroll(function () {

    animarcordones();

});

$(window).load(function () {


    animarcordones();

});

var chartseconomiacreditos = {}
var inVieweconomiacreditos = false;

function animareconomiacreditos() {
    for (var i = 0; i < 1; i++) {
        var idElement = "economiacreditos";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartseconomiacreditos[idElement]) { continue }
            chartseconomiacreditos[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inVieweconomiacreditos) { return; }
            inVieweconomiacreditos = true;
            return new Chart(ctx, {
                type: 'bar',
                data: {

                    labels: ['Enero', 'Marzo', 'Junio'],
                    datasets: [
                        {
                            data: [1530000, 1690000, 2570000],
                            borderColor: [

                                'rgba(105, 190, 190, 1)',
                                'rgba(71, 123, 168, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],
                            backgroundColor: [

                                'rgba(105, 190, 190, 1)',
                                'rgba(71, 123, 168, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',

                            ],
                        },

                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { ticks: { font: { family: 'Raleway' } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    legend: {
                        display: false
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Monto total créditos por fecha ($)',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                        },
                        legend: {
                            display: false
                        },
                    }
                }
            });
        } else {
            inVieweconomiacreditos = false;
        }
    }
}
$(window).scroll(function () {

    animareconomiacreditos();

});

$(window).load(function () {


    animareconomiacreditos();

});



var chartsCreditosSector = {}
var inViewCreditosSector = false;

function animarCreditosSector() {
    for (var i = 0; i < 1; i++) {
        var idElement = "CreditosSector";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartsCreditosSector[idElement]) { continue }
            chartsCreditosSector[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewCreditosSector) { return; }
            inViewCreditosSector = true;
            return new Chart(ctx, {
                plugins: [ChartDataLabels],
                type: 'doughnut',
                data: {

                    labels: ['Comercio', 'Produccion', 'Servicios'],
                    datasets: [
                        {
                            tension: 0.1,
                            fill: false,
                            data: [2.25, 1.75, 1.79],
                            fill: true,
                            backgroundColor: ['rgba(71, 123, 168, 0.75)', 'rgba(105, 190, 190, 0.75)', 'rgba(215, 90, 218, 0.75)'
                            ],
                            borderColor: [

                                'rgba(71, 123, 168, 1)', 'rgba(105, 190, 190, 1)', 'rgba(215, 90, 218, 1)'
                            ],

                            borderWidth: 2
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scale: {
                        max: 3000000,
                        stepSize: 1000000,
                        r: {
                            ticks: {


                                font: { family: 'Raleway' }
                            },

                        }
                    },

                    plugins: {
                        datalabels: {
                            display: 'auto',
                            formatter: function (value) {
                              return  '$' + value;
                            },
                            color: 'white',
                            font: {
                               
                             
                              family: 'Raleway'
                            }
                          },

                        title: {
                            display: true,
                            text: 'Monto total créditos por actividad (en millones $)',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            }
                        },
                        legend: {
                            display: true,
                            position: 'right',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } }
                        }

                    }


                }
            });
        } else {
            inViewCreditosSector = false;
        }
    }
}
$(window).scroll(function () {

    animarCreditosSector();

});

$(window).load(function () {


    animarCreditosSector();

});


var chartambientezoo = {}
var inViewambientezoo = false;

function animarambientezoo() {
    for (var i = 0; i < 1; i++) {
        var idElement = "ambientezoo";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartambientezoo[idElement]) { continue }
            chartambientezoo[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewambientezoo) { return; }
            inViewambientezoo = true;
            return new Chart(ctx, {
                type: 'bar',
                data: {

                    labels: ['Castraciones ', 'Vacunaciones ', 'Desinfecciónes '],
                    datasets: [
                        {
                            data: [1207, 317, 96],
                            borderColor: [

                                'rgba(105, 190, 190, 1)',
                                'rgba(71, 123, 168, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],
                            backgroundColor: [

                                'rgba(105, 190, 190, 1)',
                                'rgba(71, 123, 168, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',

                            ],
                        },

                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { ticks: { font: { family: 'Raleway' } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    legend: {
                        display: false
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Actividades de zoonosis',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                        },
                        legend: {
                            display: false
                        },
                    }
                }
            });
        } else {
            inVieweconomiacreditos = false;
        }
    }
}
$(window).scroll(function () {

    animarambientezoo();

});

$(window).load(function () {


    animarambientezoo();

});



var chartplanifobras = {}
var inViewplanifobras = false;

function animarplanifobras() {
    for (var i = 0; i < 1; i++) {
        var idElement = "planifobras";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartplanifobras[idElement]) { continue }
            chartplanifobras[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewplanifobras) { return; }
            inViewplanifobras = true;
            return new Chart(ctx, {
                type: 'bar',
                data: {

                    labels: ['Conexión de gas natural', 'Conexión de cloacas', 'Conexión de agua potable', 'Obras de gas natural', 'Otras'],
                    datasets: [
                        {
                            tension: 0.1,
                            fill: false,
                            data: [183, 66, 61, 15, 30],
                            fill: true,
                            backgroundColor: ['rgba(71, 123, 168, 1)', 'rgba(105, 190, 190, 1)', 'rgba(215, 90, 218, 0.5)',



                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],


                            borderWidth: 4,
                            borderColor: [

                                'rgba(234,238,226,0)'
                            ],

                        }
                    ]
                },
                options: {
                    scales: {
                        y: { ticks: { font: { family: 'Raleway' } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {

                        title: {
                            display: true,
                            text: 'Permisos de trabajo en via pública',
                            align: 'center',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            }
                        },
                        legend: {
                            display: false,
                            position: 'right',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } }
                        },
                    },



                }
            });
        } else {
            inViewppersonalsecre = false;
        }
    }
}
$(window).scroll(function () {

    animarplanifobras();

});

$(window).load(function () {


    animarplanifobras();

});



var chartmicro = {}
var inviewmicro = false;

function animarmicro() {
    for (var i = 0; i < 1; i++) {
        var idElement = "desarrollomicro";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartmicro[idElement]) { continue }
            chartmicro[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inviewmicro) { return; }
            inviewmicro = true;
            return new Chart(ctx, {
                type: 'bar',
                data: {

                    labels: ['Entrevistas', 'Evaluaciones', 'Seguimiento'],
                    datasets: [
                        {
                            tension: 0.1,
                            fill: false,
                            data: [139, 63, 22],
                            fill: true,
                            backgroundColor: ['rgba(71, 123, 168, 1)', 'rgba(105, 190, 190, 1)', 'rgba(215, 90, 218, 0.5)',



                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],


                            borderWidth: 4,
                            borderColor: [

                                'rgba(234,238,226,0)'
                            ],

                        }
                    ]
                },
                options: {
                    scales: {
                        y: { ticks: { font: { family: 'Raleway' } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {

                        title: {
                            display: true,
                            text: 'Actividades de microcréditos',
                            align: 'center',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            }
                        },
                        legend: {
                            display: false,
                            position: 'right',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } }
                        },
                    },



                }
            });
        } else {
            inViewppersonalsecre = false;
        }
    }
}
$(window).scroll(function () {

    animarmicro();

});

$(window).load(function () {


    animarmicro();

});

var chartatraques = {}
var InViewatraques = false;

function animaratraques() {
    for (var i = 0; i < 1; i++) {
        var idElement = "atraques";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartatraques[idElement]) { continue }
            chartatraques[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (InViewatraques) { return; }
            InViewatraques = true;
            return new Chart(ctx, {
                type: 'bar',
                data: {

                    /*labels: ['Jurisd. Comunal', 'Otras Jurisd.', 'Ant. Coparticipación', 'Rec. de capital', 'Aportes no reint.'],*/
                    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Junio'],
                    datasets: [
                        {
                            label: 'Larga distancia',
                            tension: 0.2,
                            fill: false,

                            data: [371, 379, 360, 313, 271, 70],

                            backgroundColor: [

                                'rgba(105, 190, 190, 1)'
                            ],

                        },
                        {
                            label: 'Corta y media distancia',
                            tension: 0.2,
                            fill: false,

                            data: [354, 351, 429, 365, 330, 166],

                            backgroundColor: [

                                'rgba(71, 123, 168, 1)'
                            ],


                        }



                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: { family: 'Raleway' }
                            },
                            stacked: true
                        },
                        y: {
                            ticks: {
                                font: { family: 'Raleway' },
                                maxTicksLimit: 5,
                            },
                            stacked: true,
                            font: {
                                family: 'Titillium Web'
                            },
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right',
                        align: 'middle',
                        labels: { font: { family: 'Raleway' } },
                    },
                    plugins: {
                        legend: {
                            labels: {
                                font: {
                                    family: 'Raleway'
                                }
                            }
                        },
                        title: {
                            display: true,
                            text: 'Atraques en Terminal de Ómnibus ',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                        }
                    }
                }
            });
        } else {
            InViewatraques = false;
        }
    }
}
$(window).scroll(function () {

    animaratraques();

});

$(window).load(function () {


    animaratraques();

});



var chartactcomercio = {}
var inViewactcomercio = false;

function animaractcomercio() {
    for (var i = 0; i < 1; i++) {
        var idElement = "actcomercio";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartactcomercio[idElement]) { continue }
            chartactcomercio[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewactcomercio) { return; }
            inViewactcomercio = true;
            return new Chart(ctx, {
                type: 'bar',
                data: {

                    labels: ['Bajas comerciales', 'Bajas de oficio', 'Altas comerciales', 'Lib. Sanitarias nuevas', 'Renovaciones'],
                    datasets: [
                        {
                            tension: 0.1,
                            fill: false,
                            data: [96, 90, 116, 295, 326],
                            fill: true,
                            backgroundColor: ['rgba(71, 123, 168, 1)', 'rgba(105, 190, 190, 1)', 'rgba(215, 90, 218, 0.5)',



                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],


                            borderWidth: 4,
                            borderColor: [

                                'rgba(234,238,226,0)'
                            ],

                        }
                    ]
                },
                options: {
                    scales: {
                        y: { ticks: { font: { family: 'Raleway' } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {

                        title: {
                            display: true,
                            text: 'Actividades Dirección de Comercio',
                            align: 'center',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            }
                        },
                        legend: {
                            display: false,
                            position: 'right',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } }
                        },
                    },



                }
            });
        } else {
            inViewactcomercio = false;
        }
    }
}
$(window).scroll(function () {

    animaractcomercio();

});

$(window).load(function () {


    animaractcomercio();

});