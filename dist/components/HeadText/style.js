"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.title = exports.sideArrow = exports.sideArrowExpanded = exports.container = void 0;
var container = {
  flex: 1,
  display: 'flex',
  boxShadow: '0px 0px 10px 0px lightgrey',
  padding: '10px',
  cursor: 'pointer',
  fontFamily: 'helvetica',
  fontWeight: 'bold',
  userSelect: 'none',
  flexDirection: 'row'
};
exports.container = container;
var sideArrowExpanded = {
  textAlign: 'right',
  transition: 'transform 0.25s'
};
exports.sideArrowExpanded = sideArrowExpanded;
var sideArrow = {
  textAlign: 'right',
  transform: 'rotateZ(-180deg)',
  transition: 'transform 0.25s'
};
exports.sideArrow = sideArrow;
var title = {
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'center',
  alignItems: 'center'
};
exports.title = title;