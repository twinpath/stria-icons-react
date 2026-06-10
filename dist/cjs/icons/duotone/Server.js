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
const ServerDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 288H32C14.375 288 0 302.375 0 320V448C0 465.625 14.375 480 32 480H480C497.625 480 512 465.625 512 448V320C512 302.375 497.625 288 480 288ZM352 408C338.75 408 328 397.25 328 384S338.75 360 352 360S376 370.75 376 384S365.25 408 352 408ZM416 408C402.75 408 392 397.25 392 384S402.75 360 416 360S440 370.75 440 384S429.25 408 416 408ZM416 152C429.25 152 440 141.25 440 128S429.25 104 416 104S392 114.75 392 128S402.75 152 416 152Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 32H32C14.375 32 0 46.375 0 64V192C0 209.625 14.375 224 32 224H480C497.625 224 512 209.625 512 192V64C512 46.375 497.625 32 480 32ZM352 152C338.75 152 328 141.25 328 128S338.75 104 352 104S376 114.75 376 128S365.25 152 352 152ZM416 152C402.75 152 392 141.25 392 128S402.75 104 416 104S440 114.75 440 128S429.25 152 416 152ZM416 360C402.746 360 392 370.746 392 384S402.746 408 416 408C429.256 408 440 397.254 440 384S429.256 360 416 360Z" })
    ]
  }
));
ServerDuotone.displayName = "ServerDuotone";
var Server_default = ServerDuotone;
