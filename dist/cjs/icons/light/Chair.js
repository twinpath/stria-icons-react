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
var Chair_exports = {};
__export(Chair_exports, {
  default: () => Chair_default
});
module.exports = __toCommonJS(Chair_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChairLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M443.568 315.9L428.8 283.891C420.978 266.945 403.871 256 385.213 256H384V112C384 50.25 333.75 0 272 0H176C114.25 0 64 50.25 64 112V256H62.787C44.129 256 27.019 266.945 19.201 283.885L4.435 315.889C-2.448 330.838 -1.262 348.018 7.591 361.867C13.433 371.004 22.129 377.4 32 380.91V496C32 504.836 39.164 512 48 512S64 504.836 64 496V384H384V496C384 504.836 391.164 512 400 512S416 504.836 416 496V380.91C425.873 377.398 434.57 371 440.412 361.859C449.261 348.018 450.445 330.834 443.568 315.9ZM288 33.617C324.47 41.051 352 73.355 352 112V256H288V33.617ZM192 32H256V256H192V32ZM96 112C96 73.355 123.529 41.051 160 33.617V256H96V112ZM399.976 352H48.021C36.281 352 28.636 339.834 33.488 329.297L48.252 297.297C50.859 291.648 56.564 288 62.787 288H385.213C391.435 288 397.14 291.648 399.746 297.297L414.505 329.287C419.396 339.904 411.642 352 399.976 352Z" })
  }
));
ChairLight.displayName = "ChairLight";
var Chair_default = ChairLight;
