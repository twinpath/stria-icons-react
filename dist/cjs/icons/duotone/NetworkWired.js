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
var NetworkWired_exports = {};
__export(NetworkWired_exports, {
  default: () => NetworkWired_default
});
module.exports = __toCommonJS(NetworkWired_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const NetworkWiredDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M640 248V264C640 272.875 632.875 280 624 280H536V320H488V280H152V320H104V280H16C7.125 280 0 272.875 0 264V248C0 239.125 7.125 232 16 232H296V192H344V232H624C632.875 232 640 239.125 640 248Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 192H416C433.625 192 448 177.625 448 160V32C448 14.375 433.625 0 416 0H224C206.375 0 192 14.375 192 32V160C192 177.625 206.375 192 224 192ZM256 64H384V128H256V64ZM608 320H416C398.375 320 384 334.375 384 352V480C384 497.625 398.375 512 416 512H608C625.625 512 640 497.625 640 480V352C640 334.375 625.625 320 608 320ZM576 448H448V384H576V448ZM224 320H32C14.375 320 0 334.375 0 352V480C0 497.625 14.375 512 32 512H224C241.625 512 256 497.625 256 480V352C256 334.375 241.625 320 224 320ZM192 448H64V384H192V448Z" })
    ]
  }
));
NetworkWiredDuotone.displayName = "NetworkWiredDuotone";
var NetworkWired_default = NetworkWiredDuotone;
