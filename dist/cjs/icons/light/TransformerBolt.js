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
var TransformerBolt_exports = {};
__export(TransformerBolt_exports, {
  default: () => TransformerBolt_default
});
module.exports = __toCommonJS(TransformerBolt_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TransformerBoltLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 128H320C328.836 128 336 120.836 336 112C336 103.162 328.836 96 320 96H224C215.164 96 208 103.162 208 112C208 120.836 215.164 128 224 128ZM64 64H160C168.836 64 176 56.836 176 48C176 39.162 168.836 32 160 32H128V16C128 7.16 120.836 0 112 0S96 7.16 96 16V32H64C55.164 32 48 39.162 48 48C48 56.836 55.164 64 64 64ZM368 480H352V192H368C376.836 192 384 184.836 384 176C384 167.162 376.836 160 368 160H16C7.164 160 0 167.162 0 176C0 184.836 7.164 192 16 192H32V480H16C7.164 480 0 487.162 0 496C0 504.836 7.164 512 16 512H368C376.836 512 384 504.836 384 496C384 487.162 376.836 480 368 480ZM320 480H64V192H320V480ZM224 64H320C328.836 64 336 56.836 336 48C336 39.162 328.836 32 320 32H288V16C288 7.16 280.836 0 272 0S256 7.16 256 16V32H224C215.164 32 208 39.162 208 48C208 56.836 215.164 64 224 64ZM64 128H160C168.836 128 176 120.836 176 112C176 103.162 168.836 96 160 96H64C55.164 96 48 103.162 48 112C48 120.836 55.164 128 64 128ZM128 352H217.375L148.688 420.688C142.438 426.938 142.438 437.063 148.688 443.312C151.812 446.438 155.906 448 160 448S168.188 446.438 171.312 443.312L267.312 347.312C271.875 342.734 273.25 335.859 270.781 329.875S262.469 320 256 320H166.625L235.312 251.312C241.562 245.062 241.562 234.937 235.312 228.688S218.937 222.438 212.688 228.688L116.688 324.688C112.125 329.266 110.75 336.141 113.219 342.125S121.531 352 128 352Z" })
  }
));
TransformerBoltLight.displayName = "TransformerBoltLight";
var TransformerBolt_default = TransformerBoltLight;
