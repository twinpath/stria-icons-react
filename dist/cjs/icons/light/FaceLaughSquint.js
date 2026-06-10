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
var FaceLaughSquint_exports = {};
__export(FaceLaughSquint_exports, {
  default: () => FaceLaughSquint_default
});
module.exports = __toCommonJS(FaceLaughSquint_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceLaughSquintLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M391.02 272H120.98C111.414 272 103.906 280.375 105.117 290C113.957 361 174.504 416 248.008 416H263.992C337.375 416 398.043 361 406.883 290C408.094 280.375 400.586 272 391.02 272ZM263.992 384H248.008C197.754 384 154.523 350.75 140.598 304H371.402C357.477 350.75 314.246 384 263.992 384ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM129.688 215.156C132.5 220.766 138.141 224 144.016 224C146.422 224 148.859 223.453 151.156 222.312L215.156 190.312C220.578 187.594 224 182.062 224 176S220.578 164.406 215.156 161.688L151.156 129.688C143.281 125.766 133.641 128.938 129.688 136.844S128.938 154.359 136.844 158.312L172.219 176L136.844 193.688C128.938 197.641 125.734 207.25 129.688 215.156ZM296.844 190.312L360.844 222.312C363.141 223.453 365.578 224 367.984 224C373.859 224 379.5 220.766 382.312 215.156C386.266 207.25 383.062 197.641 375.156 193.688L339.781 176L375.156 158.312C383.063 154.359 386.266 144.75 382.313 136.844C378.344 128.938 368.75 125.766 360.844 129.688L296.844 161.688C291.422 164.406 288 169.938 288 176S291.422 187.594 296.844 190.312Z" })
  }
));
FaceLaughSquintLight.displayName = "FaceLaughSquintLight";
var FaceLaughSquint_default = FaceLaughSquintLight;
