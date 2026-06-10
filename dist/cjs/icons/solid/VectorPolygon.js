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
var VectorPolygon_exports = {};
__export(VectorPolygon_exports, {
  default: () => VectorPolygon_default
});
module.exports = __toCommonJS(VectorPolygon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VectorPolygonSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 160C433.674 160 448 145.674 448 128V64C448 46.326 433.674 32 416 32H352C334.328 32 320 46.326 320 64H128C128 46.326 113.674 32 96 32H32C14.328 32 0 46.326 0 64V128C0 145.674 14.328 160 32 160V352C14.328 352 0 366.326 0 384V448C0 465.674 14.328 480 32 480H96C113.674 480 128 465.674 128 448H320C320 465.674 334.328 480 352 480H416C433.674 480 448 465.674 448 448V384C448 366.326 433.674 352 416 352H382.926L350.113 297.35C351.049 294.342 352 291.316 352 288V224C352 220.684 351.049 217.658 350.113 214.65L382.926 160H416ZM80 432H48V400H80V432ZM80 112H48V80H80V112ZM289.074 192H256C238.328 192 224 206.326 224 224V288C224 305.674 238.328 320 256 320H289.074L321.889 374.652C320.953 377.66 320 380.684 320 384H128C128 366.326 113.674 352 96 352V160C113.674 160 128 145.674 128 128H320C320 131.316 320.953 134.34 321.889 137.348L289.074 192ZM304 240V272H272V240H304ZM368 400H400V432H368V400ZM368 80H400V112H368V80Z" })
  }
));
VectorPolygonSolid.displayName = "VectorPolygonSolid";
var VectorPolygon_default = VectorPolygonSolid;
