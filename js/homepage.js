$(document)
    .ready(function () {

        var
        changeSides = function () {
            $('.ui.shape')
                .eq(0)
                .shape('flip over')
                .end()
                .eq(1)
                .shape('flip over')
                .end()
                .eq(2)
                .shape('flip back')
                .end()
                .eq(3)
                .shape('flip back')
                .end();
        },
            validationRules = {
                firstName: {
                    identifier: 'email',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Please enter an e-mail'
            },
                        {
                            type: 'email',
                            prompt: 'Please enter a valid e-mail'
            }
          ]
                }
            };

        $('.ui.dropdown')
            .dropdown({
                on: 'hover'
            });

        $('.ui.form')
            .form(validationRules, {
                on: 'blur'
            });

        $('.masthead .information')
            .transition('scale in');

        setInterval(changeSides, 3000);

    });
/**
 *
 * Responsive website using AngularJS
 * http://www.script-tutorials.com/responsive-website-using-angularjs/
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Script Tutorials
 * http://www.script-tutorials.com/
 */

