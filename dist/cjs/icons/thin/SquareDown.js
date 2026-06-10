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
var SquareDown_exports = {};
__export(SquareDown_exports, {
  default: () => SquareDown_default
});
module.exports = __toCommonJS(SquareDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareDownThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.652 419.346 32 384 32ZM432 416C432 442.467 410.467 464 384 464H64C37.533 464 16 442.467 16 416V96C16 69.533 37.533 48 64 48H384C410.467 48 432 69.533 432 96V416ZM316.684 256H272V152C272 138.744 261.254 128 248 128H200C186.746 128 176 138.744 176 152V256H131.316C109.934 256 99.227 281.852 114.346 296.971L207.029 389.654C211.717 394.34 217.857 396.684 224 396.684S236.283 394.34 240.971 389.654L333.654 296.971C348.773 281.852 338.066 256 316.684 256ZM322.34 285.656L229.656 378.34C227.617 380.379 225.238 380.684 224 380.684S220.383 380.379 218.344 378.34L125.66 285.656C122.248 282.244 123.311 278.424 123.924 276.938C124.539 275.453 126.492 272 131.316 272H192V152C192 147.588 195.588 144 200 144H248C252.412 144 256 147.588 256 152V272H316.684C321.508 272 323.461 275.453 324.076 276.938C324.689 278.424 325.752 282.244 322.34 285.656Z" })
  }
));
SquareDownThin.displayName = "SquareDownThin";
var SquareDown_default = SquareDownThin;
