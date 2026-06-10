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
var Server_exports = {};
__export(Server_exports, {
  default: () => Server_default
});
module.exports = __toCommonJS(Server_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ServerLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 32H64C28.654 32 0 60.654 0 96V160C0 195.346 28.654 224 64 224H448C483.348 224 512 195.346 512 160V96C512 60.654 483.348 32 448 32ZM480 160C480 177.645 465.645 192 448 192H64C46.355 192 32 177.645 32 160V96C32 78.355 46.355 64 64 64H448C465.645 64 480 78.355 480 96V160ZM416 104C402.746 104 392 114.744 392 128C392 141.254 402.746 152 416 152C429.256 152 440 141.254 440 128C440 114.744 429.256 104 416 104ZM320 104C306.746 104 296 114.744 296 128C296 141.254 306.746 152 320 152C333.256 152 344 141.254 344 128C344 114.744 333.256 104 320 104ZM448 288H64C28.654 288 0 316.654 0 352V416C0 451.346 28.654 480 64 480H448C483.348 480 512 451.346 512 416V352C512 316.654 483.348 288 448 288ZM480 416C480 433.645 465.645 448 448 448H64C46.355 448 32 433.645 32 416V352C32 334.355 46.355 320 64 320H448C465.645 320 480 334.355 480 352V416ZM416 360C402.746 360 392 370.744 392 384C392 397.254 402.746 408 416 408C429.256 408 440 397.254 440 384C440 370.744 429.256 360 416 360ZM320 360C306.746 360 296 370.744 296 384C296 397.254 306.746 408 320 408C333.256 408 344 397.254 344 384C344 370.744 333.256 360 320 360Z" })
  }
));
ServerLight.displayName = "ServerLight";
var Server_default = ServerLight;
