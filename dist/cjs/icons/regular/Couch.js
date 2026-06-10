var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Couch_exports = {};
__export(Couch_exports, {
  default: () => Couch_default
});
module.exports = __toCommonJS(Couch_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CouchRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 224C540.654 224 512 252.654 512 288H128C128 252.654 99.346 224 64 224S0 252.654 0 288V448C0 465.674 14.326 480 32 480H96C113.674 480 128 465.674 128 448H512C512 465.674 526.326 480 544 480H608C625.674 480 640 465.674 640 448V288C640 252.654 611.348 224 576 224ZM80 432H48V288C48 279.178 55.178 272 64 272S80 279.178 80 288V432ZM512 400H128V336H512V400ZM592 432H560V288C560 279.178 567.178 272 576 272S592 279.178 592 288V432ZM88 192C101.25 192 112 181.25 112 168V152C112 112.312 144.297 80 184 80H456C495.703 80 528 112.312 528 152V168C528 181.25 538.75 192 552 192S576 181.25 576 168V152C576 85.844 522.172 32 456 32H184C117.828 32 64 85.844 64 152V168C64 181.25 74.75 192 88 192Z" })
  }
));
CouchRegular.displayName = "CouchRegular";
var Couch_default = CouchRegular;
