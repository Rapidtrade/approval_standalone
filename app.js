angular.module('approve',[])
.controller('Approval',function($scope,$http,$location){
    var orderid = $location.search().orderid;
    var supplierid =  $location.search().supplierid;
    var workflowid = $location.search().workflowid;
    $scope.clientOrderID = $location.search().clientorderid;

    $scope.changeStatus = function(status,e){
      e.preventDefault();
      var url = 'http://api.rapidtrade.biz/rest/Post?method=workflow_modify' ;
      var data = {
          "SupplierID" : supplierid,
          "CurrentParentRouteID" : "",
          "TransactionID" : orderid.toString(),
          "Status" : status,
          "RouteID" : "2",
          "Longitude" : "",
          "Latitude" : "",
          "WorkflowID" : workflowid,
          "Comment" : status ? "appr_cust" : "rej_cust"
      }

      $.ajax({
          type: "POST",
          url: url,
          data: data,
          success: function(){
              alert(status ? "Approved Successfully" : "Rejected Successfully");
          },
          error : function(){
              alert(status ? "Error Approving Order Please Try Again" : "Error Rejecting Order Please Try Again");
          },
          crossDomain: true,
          datatype : 'json',
      });
    }
});
