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
var MessageSmile_exports = {};
__export(MessageSmile_exports, {
  default: () => MessageSmile_default
});
module.exports = __toCommonJS(MessageSmile_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MessageSmileSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 0H64C28.75 0 0 28.748 0 63.994V351.971C0 387.219 28.75 415.967 64 415.967H160V499.959C160 509.709 171.25 515.459 179.125 509.709L304 415.967H448C483.25 415.967 512 387.219 512 351.971V63.994C512 28.748 483.25 0 448 0ZM320.025 112C337.773 112 352.021 126.25 352.021 144S337.773 176 320.025 176S288.029 161.75 288.029 144S302.277 112 320.025 112ZM192.043 112C209.791 112 224.039 126.25 224.039 144S209.791 176 192.043 176S160.047 161.75 160.047 144S174.295 112 192.043 112ZM362.27 271.25C335.773 302.25 297.154 320 256.033 320C214.914 320 176.295 302.25 149.799 271.25C141.299 261.25 142.299 246.125 152.424 237.5C162.422 229 177.67 230.125 186.293 240.25C203.541 260.375 228.912 272 256.033 272C283.156 272 308.527 260.375 325.775 240.25C334.398 230.125 349.521 228.875 359.52 237.5C369.645 246.125 370.77 261.25 362.27 271.25Z" })
  }
));
MessageSmileSolid.displayName = "MessageSmileSolid";
var MessageSmile_default = MessageSmileSolid;
