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
const ServerRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 32H64C28.654 32 0 60.654 0 96V160C0 195.346 28.654 224 64 224H448C483.348 224 512 195.346 512 160V96C512 60.654 483.348 32 448 32ZM464 160C464 168.822 456.822 176 448 176H64C55.178 176 48 168.822 48 160V96C48 87.178 55.178 80 64 80H448C456.822 80 464 87.178 464 96V160ZM448 288H64C28.654 288 0 316.654 0 352V416C0 451.346 28.654 480 64 480H448C483.348 480 512 451.346 512 416V352C512 316.654 483.348 288 448 288ZM464 416C464 424.822 456.822 432 448 432H64C55.178 432 48 424.822 48 416V352C48 343.178 55.178 336 64 336H448C456.822 336 464 343.178 464 352V416ZM352 104C338.746 104 328 114.744 328 128C328 141.254 338.746 152 352 152S376 141.254 376 128C376 114.744 365.254 104 352 104ZM416 104C402.746 104 392 114.744 392 128C392 141.254 402.746 152 416 152S440 141.254 440 128C440 114.744 429.254 104 416 104ZM352 360C338.746 360 328 370.744 328 384C328 397.254 338.746 408 352 408S376 397.254 376 384C376 370.744 365.254 360 352 360ZM416 360C402.746 360 392 370.744 392 384C392 397.254 402.746 408 416 408S440 397.254 440 384C440 370.744 429.254 360 416 360Z" })
  }
));
ServerRegular.displayName = "ServerRegular";
var Server_default = ServerRegular;
