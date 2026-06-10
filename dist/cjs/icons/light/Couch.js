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
const CouchLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 224C540.654 224 512 252.652 512 288H128C128 252.652 99.346 224 64 224S0 252.652 0 288V448C0 465.672 14.326 480 32 480H96C113.674 480 128 465.672 128 448H512C512 465.672 526.326 480 544 480H608C625.674 480 640 465.672 640 448V288C640 252.652 611.346 224 576 224ZM96 448H32V288C32 270.355 46.355 256 64 256S96 270.355 96 288V448ZM512 416H128V320H512V416ZM608 448H544V288C544 270.355 558.355 256 576 256S608 270.355 608 288V448ZM80 192C88.844 192 96 184.844 96 176V144C96 99.875 131.891 64 176 64H464C508.109 64 544 99.875 544 144V176C544 184.844 551.156 192 560 192S576 184.844 576 176V144C576 82.25 525.75 32 464 32H176C114.25 32 64 82.25 64 144V176C64 184.844 71.156 192 80 192Z" })
  }
));
CouchLight.displayName = "CouchLight";
var Couch_default = CouchLight;
