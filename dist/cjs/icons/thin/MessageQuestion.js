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
var MessageQuestion_exports = {};
__export(MessageQuestion_exports, {
  default: () => MessageQuestion_default
});
module.exports = __toCommonJS(MessageQuestion_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MessageQuestionThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 296.002C247.164 296.002 240 303.164 240 312.002C240 320.838 247.164 328.002 256 328.002S272 320.838 272 312.002C272 303.164 264.836 296.002 256 296.002ZM283.656 95.564H223.062C192.688 95.564 168 120.252 168 150.611C168 155.033 171.594 158.611 176 158.611S184 155.033 184 150.611C184 129.08 201.531 111.564 223.062 111.564H283.656C308.094 111.564 328 131.455 328 155.908C328 172.799 318.594 188.002 303.375 195.643L252.313 222.143C249.656 223.518 248 226.252 248 229.236V256.002C248 260.424 251.594 264.002 256 264.002S264 260.424 264 256.002V234.096L310.656 209.893C331.219 199.58 344 178.893 344 155.908C344 122.627 316.938 95.564 283.656 95.564ZM448 0H64C28.75 0 0 28.748 0 63.994V351.971C0 387.219 28.75 415.967 64 415.967H160V499.959C160 507.031 165.92 512 172.178 512C174.547 512 176.963 511.287 179.125 509.709L304 415.967H448C483.25 415.967 512 387.219 512 351.971V63.994C512 28.748 483.25 0 448 0ZM496 351.971C496 378.436 474.467 399.967 448 399.967H298.662L294.395 403.172L176 492.053V399.967H64C37.533 399.967 16 378.436 16 351.971V63.994C16 37.529 37.533 15.998 64 15.998H448C474.467 15.998 496 37.529 496 63.994V351.971Z" })
  }
));
MessageQuestionThin.displayName = "MessageQuestionThin";
var MessageQuestion_default = MessageQuestionThin;
