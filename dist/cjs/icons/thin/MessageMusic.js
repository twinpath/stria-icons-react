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
var MessageMusic_exports = {};
__export(MessageMusic_exports, {
  default: () => MessageMusic_default
});
module.exports = __toCommonJS(MessageMusic_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MessageMusicThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M340.797 96.639L212.797 152.634C209.875 153.915 208 156.79 208 159.977V264.274C199.494 259.165 188.35 255.97 176 255.97C149.49 255.97 128 270.297 128 287.967S149.49 319.965 176 319.965S224 305.638 224 287.967V165.196L336 116.2V232.276C327.494 227.167 316.35 223.972 304 223.972C277.49 223.972 256 238.299 256 255.97S277.49 287.967 304 287.967S352 273.64 352 255.97V103.982C352 101.295 350.641 98.764 348.375 97.295C346.156 95.795 343.25 95.608 340.797 96.639ZM176 303.966C156.467 303.966 144 294.49 144 287.967S156.467 271.968 176 271.968C195.535 271.968 208 281.444 208 287.967S195.535 303.966 176 303.966ZM304 271.968C284.467 271.968 272 262.493 272 255.97S284.467 239.971 304 239.971C323.535 239.971 336 249.447 336 255.97S323.535 271.968 304 271.968ZM448 0H64C28.75 0 0 28.748 0 63.995V351.972C0 387.219 28.75 415.967 64 415.967H160V499.96C160 507.032 165.92 512 172.178 512C174.547 512 176.963 511.287 179.125 509.709L304 415.967H448C483.25 415.967 512 387.219 512 351.972V63.995C512 28.748 483.25 0 448 0ZM496 351.972C496 378.436 474.467 399.968 448 399.968H298.662L294.395 403.173L176 492.052V399.968H64C37.533 399.968 16 378.436 16 351.972V63.995C16 37.53 37.533 15.999 64 15.999H448C474.467 15.999 496 37.53 496 63.995V351.972Z" })
  }
));
MessageMusicThin.displayName = "MessageMusicThin";
var MessageMusic_default = MessageMusicThin;
