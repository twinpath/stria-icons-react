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
var SquareCode_exports = {};
__export(SquareCode_exports, {
  default: () => SquareCode_default
});
module.exports = __toCommonJS(SquareCode_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareCodeThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.656 419.346 32 384 32ZM432 416C432 442.469 410.467 464 384 464H64C37.533 464 16 442.469 16 416V96C16 69.531 37.533 48 64 48H384C410.467 48 432 69.531 432 96V416ZM180.766 170.344C177.641 167.219 172.578 167.219 169.453 170.344L89.453 250.344C86.328 253.469 86.328 258.531 89.453 261.656L169.453 341.656C171.016 343.219 173.062 344 175.109 344S179.203 343.219 180.766 341.656C183.891 338.531 183.891 333.469 180.766 330.344L106.422 256L180.766 181.656C183.891 178.531 183.891 173.469 180.766 170.344ZM278.547 170.344C275.422 167.219 270.359 167.219 267.234 170.344S264.109 178.531 267.234 181.656L341.578 256L267.234 330.344C264.109 333.469 264.109 338.531 267.234 341.656C268.797 343.219 270.844 344 272.891 344S276.984 343.219 278.547 341.656L358.547 261.656C361.672 258.531 361.672 253.469 358.547 250.344L278.547 170.344Z" })
  }
));
SquareCodeThin.displayName = "SquareCodeThin";
var SquareCode_default = SquareCodeThin;
