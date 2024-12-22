<?php

/**
 * Extension Manager/Repository config file for ext "kwm24".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'kwm24',
    'description' => '',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'bootstrap_package' => '15.0.0-15.99.99',
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'FhHagenberg\\Kwm24\\' => 'Classes',
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Lena Wabro',
    'author_email' => 'lenawabro2005@gmail.com',
    'author_company' => 'FH Hagenberg',
    'version' => '1.0.0',
];
