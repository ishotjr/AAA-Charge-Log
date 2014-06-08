(function (global) {
    var ChargesViewModel,
        app = global.app = global.app || {};

    ChargesViewModel = kendo.data.ObservableObject.extend({
        chargesDataSource: null,

        init: function () {
            var that = this,
                dataSource;

            kendo.data.ObservableObject.fn.init.apply(that, []);


            var everlive = new Everlive({
                apiKey: "apiKey",
                scheme: "http"
            });

            dataSource = new kendo.data.DataSource({
                type: "everlive",
                transport: {
                    typeName: "Charges"
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
                            Cell1Charge:    { type: "number" },
                            Cell2Charge:    { type: "number" },
                            Cell3Charge:    { type: "number" },
                            Cell4Charge:    { type: "number" },
                            PackId:   { type: "string" },
                            Rate:    { type: "number" },
                            IsDischarge:    { type: "boolean" },
                            Note:   { type: "string" },
                            ChargedAt:  { type: "date" }
                        }
                    }
                }/*,
                serverPaging: true,
                pageSize: 20,

                serverSorting: true,
                sort: { field: 'OrderDate', dir: 'asc' }
                */
            });
                

            that.set("chargesDataSource", dataSource);
            
        }
    });

    app.chargesService = {
        viewModel: new ChargesViewModel()
    };
})(window);


