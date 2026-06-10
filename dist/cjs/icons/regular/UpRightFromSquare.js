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
var UpRightFromSquare_exports = {};
__export(UpRightFromSquare_exports, {
  default: () => UpRightFromSquare_default
});
module.exports = __toCommonJS(UpRightFromSquare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UpRightFromSquareRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M488 0H352.688C339.438 0 327.594 7.906 322.5 20.156C317.438 32.438 320.219 46.406 329.594 55.781L370.281 96.469L177.375 289.375C164.875 301.875 164.875 322.125 177.375 334.625C183.625 340.875 191.812 344 200 344S216.375 340.875 222.625 334.625L415.531 141.719L456.219 182.406C462.5 188.688 470.812 192 479.281 192C483.5 192 487.75 191.188 491.844 189.5C504.094 184.406 512 172.562 512 159.312V24C512 10.75 501.25 0 488 0ZM392 320C378.75 320 368 330.75 368 344V456C368 460.406 364.406 464 360 464H56C51.594 464 48 460.406 48 456V152C48 147.594 51.594 144 56 144H168C181.25 144 192 133.25 192 120S181.25 96 168 96H56C25.125 96 0 121.125 0 152V456C0 486.875 25.125 512 56 512H360C390.875 512 416 486.875 416 456V344C416 330.75 405.25 320 392 320Z" })
  }
));
UpRightFromSquareRegular.displayName = "UpRightFromSquareRegular";
var UpRightFromSquare_default = UpRightFromSquareRegular;
