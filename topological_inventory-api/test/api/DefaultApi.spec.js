/**
 * Topological Inventory
 * Topological Inventory
 *
 * OpenAPI spec version: 0.0.1
 * Contact: you@your-company.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TopologicalInventory);
  }
}(this, function(expect, TopologicalInventory) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TopologicalInventory.DefaultApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DefaultApi', function() {
    describe('createEndpoint', function() {
      it('should call createEndpoint successfully', function(done) {
        //uncomment below and update the code to test createEndpoint
        //instance.createEndpoint(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createSource', function() {
      it('should call createSource successfully', function(done) {
        //uncomment below and update the code to test createSource
        //instance.createSource(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteEndpoint', function() {
      it('should call deleteEndpoint successfully', function(done) {
        //uncomment below and update the code to test deleteEndpoint
        //instance.deleteEndpoint(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteSource', function() {
      it('should call deleteSource successfully', function(done) {
        //uncomment below and update the code to test deleteSource
        //instance.deleteSource(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listContainerGroups', function() {
      it('should call listContainerGroups successfully', function(done) {
        //uncomment below and update the code to test listContainerGroups
        //instance.listContainerGroups(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listContainerNodes', function() {
      it('should call listContainerNodes successfully', function(done) {
        //uncomment below and update the code to test listContainerNodes
        //instance.listContainerNodes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listContainerProjects', function() {
      it('should call listContainerProjects successfully', function(done) {
        //uncomment below and update the code to test listContainerProjects
        //instance.listContainerProjects(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listContainerTemplates', function() {
      it('should call listContainerTemplates successfully', function(done) {
        //uncomment below and update the code to test listContainerTemplates
        //instance.listContainerTemplates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listEndpoints', function() {
      it('should call listEndpoints successfully', function(done) {
        //uncomment below and update the code to test listEndpoints
        //instance.listEndpoints(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listServiceInstances', function() {
      it('should call listServiceInstances successfully', function(done) {
        //uncomment below and update the code to test listServiceInstances
        //instance.listServiceInstances(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listServiceOfferings', function() {
      it('should call listServiceOfferings successfully', function(done) {
        //uncomment below and update the code to test listServiceOfferings
        //instance.listServiceOfferings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listServiceParametersSets', function() {
      it('should call listServiceParametersSets successfully', function(done) {
        //uncomment below and update the code to test listServiceParametersSets
        //instance.listServiceParametersSets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listSources', function() {
      it('should call listSources successfully', function(done) {
        //uncomment below and update the code to test listSources
        //instance.listSources(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceEndpoint', function() {
      it('should call replaceEndpoint successfully', function(done) {
        //uncomment below and update the code to test replaceEndpoint
        //instance.replaceEndpoint(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceSource', function() {
      it('should call replaceSource successfully', function(done) {
        //uncomment below and update the code to test replaceSource
        //instance.replaceSource(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('showContainerGroup', function() {
      it('should call showContainerGroup successfully', function(done) {
        //uncomment below and update the code to test showContainerGroup
        //instance.showContainerGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('showContainerNode', function() {
      it('should call showContainerNode successfully', function(done) {
        //uncomment below and update the code to test showContainerNode
        //instance.showContainerNode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('showContainerProject', function() {
      it('should call showContainerProject successfully', function(done) {
        //uncomment below and update the code to test showContainerProject
        //instance.showContainerProject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('showContainerTemplate', function() {
      it('should call showContainerTemplate successfully', function(done) {
        //uncomment below and update the code to test showContainerTemplate
        //instance.showContainerTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('showEndpoint', function() {
      it('should call showEndpoint successfully', function(done) {
        //uncomment below and update the code to test showEndpoint
        //instance.showEndpoint(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('showServiceInstance', function() {
      it('should call showServiceInstance successfully', function(done) {
        //uncomment below and update the code to test showServiceInstance
        //instance.showServiceInstance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('showServiceOffering', function() {
      it('should call showServiceOffering successfully', function(done) {
        //uncomment below and update the code to test showServiceOffering
        //instance.showServiceOffering(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('showServiceParametersSet', function() {
      it('should call showServiceParametersSet successfully', function(done) {
        //uncomment below and update the code to test showServiceParametersSet
        //instance.showServiceParametersSet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('showSource', function() {
      it('should call showSource successfully', function(done) {
        //uncomment below and update the code to test showSource
        //instance.showSource(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateEndpoint', function() {
      it('should call updateEndpoint successfully', function(done) {
        //uncomment below and update the code to test updateEndpoint
        //instance.updateEndpoint(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSource', function() {
      it('should call updateSource successfully', function(done) {
        //uncomment below and update the code to test updateSource
        //instance.updateSource(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
