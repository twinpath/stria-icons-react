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
var Toolbox_exports = {};
__export(Toolbox_exports, {
  default: () => Toolbox_default
});
module.exports = __toCommonJS(Toolbox_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ToolboxRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M502.627 214.627L425.373 137.373C419.371 131.371 411.232 128 402.746 128H384V88C384 57.125 358.875 32 328 32H184C153.125 32 128 57.125 128 88V128H109.254C100.768 128 92.629 131.371 86.627 137.373L9.373 214.627C3.371 220.629 0 228.768 0 237.254V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V237.254C512 228.768 508.629 220.629 502.627 214.627ZM176 88C176 83.594 179.594 80 184 80H328C332.406 80 336 83.594 336 88V128H176V88ZM115.883 176H396.119L464 243.883V296H376V280C376 266.745 365.255 256 352 256H352C338.745 256 328 266.745 328 280V296H184V280C184 266.745 173.255 256 160 256H160C146.745 256 136 266.745 136 280V296H48V243.883L115.883 176ZM448 432H64C55.163 432 48 424.837 48 416V344H136V360C136 373.255 146.745 384 160 384H160C173.255 384 184 373.255 184 360V344H328V360C328 373.255 338.745 384 352 384H352C365.255 384 376 373.255 376 360V344H464V416C464 424.837 456.837 432 448 432Z" })
  }
));
ToolboxRegular.displayName = "ToolboxRegular";
var Toolbox_default = ToolboxRegular;
