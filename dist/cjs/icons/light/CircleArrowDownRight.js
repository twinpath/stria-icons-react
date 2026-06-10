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
var CircleArrowDownRight_exports = {};
__export(CircleArrowDownRight_exports, {
  default: () => CircleArrowDownRight_default
});
module.exports = __toCommonJS(CircleArrowDownRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleArrowDownRightLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M297.102 319.727L207.953 320C199.109 320.031 191.969 327.219 192 336.031C192.031 344.875 199.188 352 208 352H208.047L336.047 351.625C344.859 351.594 352 344.438 352 335.625V208C352 199.156 344.844 192 336 192S320 199.156 320 208V297.375L187.312 164.688C184.188 161.562 180.094 160 176 160S167.812 161.562 164.688 164.688C158.438 170.938 158.438 181.063 164.688 187.312L297.102 319.727ZM256 496C388.549 496 496 388.547 496 256S388.549 16 256 16S16 123.453 16 256S123.451 496 256 496ZM256 48C370.691 48 464 141.309 464 256S370.691 464 256 464S48 370.691 48 256S141.309 48 256 48Z" })
  }
));
CircleArrowDownRightLight.displayName = "CircleArrowDownRightLight";
var CircleArrowDownRight_default = CircleArrowDownRightLight;
