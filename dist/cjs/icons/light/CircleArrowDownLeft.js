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
var CircleArrowDownLeft_exports = {};
__export(CircleArrowDownLeft_exports, {
  default: () => CircleArrowDownLeft_default
});
module.exports = __toCommonJS(CircleArrowDownLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleArrowDownLeftLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M347.312 187.312C353.562 181.062 353.562 170.937 347.312 164.688C344.188 161.562 340.094 160 336 160S327.812 161.562 324.688 164.688L192 297.375V208C192 199.156 184.844 192 176 192S160 199.156 160 208V335.625C160 344.437 167.141 351.594 175.953 351.625L303.953 352H304C312.812 352 319.969 344.875 320 336.031C320.031 327.219 312.891 320.031 304.047 320L214.898 319.727L347.312 187.312ZM496 256C496 123.453 388.549 16 256 16S16 123.453 16 256S123.451 496 256 496S496 388.547 496 256ZM464 256C464 370.691 370.691 464 256 464S48 370.691 48 256S141.309 48 256 48S464 141.309 464 256Z" })
  }
));
CircleArrowDownLeftLight.displayName = "CircleArrowDownLeftLight";
var CircleArrowDownLeft_default = CircleArrowDownLeftLight;
