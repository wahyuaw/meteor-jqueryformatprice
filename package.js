Package.describe({
    summary: "packaging jqueryformatprice for meteor JS."
});

Package.on_use(function(api) {
    api.use('jquery', 'client');
    api.add_files('lib/jqueryformatprice.js', 'client');
});

