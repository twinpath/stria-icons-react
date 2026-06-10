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
var SquareUp_exports = {};
__export(SquareUp_exports, {
  default: () => SquareUp_default
});
module.exports = __toCommonJS(SquareUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareUpLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM416 416C416 433.645 401.645 448 384 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V416ZM252.281 123.719C237.156 108.594 211.031 108.391 195.531 123.922L103.031 219.719C91.562 231.203 88.156 248.312 94.344 263.312C100.562 278.312 115.062 288 131.312 288H160V360C160 382.062 177.938 400 200 400H248C270.062 400 288 382.062 288 360V288H316.688C332.938 288 347.438 278.312 353.656 263.312C359.844 248.359 356.469 231.312 345.094 219.828L252.281 123.719ZM316.688 256H256V360C256 364.406 252.406 368 248 368H200C195.594 368 192 364.406 192 360V256H131.312C124.898 256 120.057 247.952 125.844 242.141L218.344 146.344C222.505 142.139 227.876 144.548 229.469 146.141L322.156 242.141L322.344 242.344C327.194 247.194 324.121 256 316.688 256Z" })
  }
));
SquareUpLight.displayName = "SquareUpLight";
var SquareUp_default = SquareUpLight;
