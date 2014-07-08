(function (global) {
    var PacksViewModel,
        app = global.app = global.app || {};

    PacksViewModel = kendo.data.ObservableObject.extend({
        packsDataSource: null,

        init: function () {
            var that = this,
                dataSource;

            kendo.data.ObservableObject.fn.init.apply(that, []);


            var everlive = new Everlive({
                apiKey: "x0jn2q4G26XP2yAm",
                scheme: "http"
            });

            dataSource = new kendo.data.DataSource({
                type: "everlive",
                transport: {
                    typeName: "Packs"
                },
                schema: {
                    model: {
                        id: "Id",
                        fields: {
                            // default Everlive fields
                            CreatedBy:  { type: "string" },
                            CreatedAt:  { type: "date" },
                            ModifiedAt: { type: "date" },

                            // type fields
                            CellCapacity:    { type: "number" },
                            Identifier:   { type: "string" },
                            Name:   { type: "string" }
                        }
                    }
                }/*,
                serverPaging: true,
                pageSize: 20,

                serverSorting: true,
                sort: { field: 'OrderDate', dir: 'asc' }
                */
            });
                

            that.set("packsDataSource", dataSource);
            
        }
    });

    app.packsService = {
        viewModel: new PacksViewModel()
    };
})(window);


