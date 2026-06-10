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
var ReplyClock_exports = {};
__export(ReplyClock_exports, {
  default: () => ReplyClock_default
});
module.exports = __toCommonJS(ReplyClock_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ReplyClockLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M544 128H512V80C512 71.156 504.844 64 496 64S480 71.156 480 80V144C480 152.844 487.156 160 496 160H544C552.844 160 560 152.844 560 144S552.844 128 544 128ZM496 0C416.471 0 352 64.473 352 144S416.471 288 496 288S640 223.527 640 144S575.529 0 496 0ZM496 256C434.242 256 384 205.758 384 144S434.242 32 496 32S608 82.242 608 144S557.758 256 496 256ZM482.463 320C471.146 320 463.137 331.574 467.725 341.922C475.607 359.688 480 379.336 480 400V432C480 440.844 487.156 448 496 448S512 440.844 512 432V400C512 374.766 506.555 350.812 496.918 329.109C494.416 323.473 488.629 320 482.463 320ZM304.049 224H60.199L218.25 92.285C225.031 86.629 225.938 76.535 220.281 69.754C214.594 62.941 204.5 62.066 197.75 67.723L5.75 227.719C2.094 230.75 0 235.25 0 240S2.094 249.25 5.75 252.281L197.75 412.281C200.75 414.781 204.375 416 208 416C212.562 416 217.125 414.031 220.281 410.25C225.938 403.469 225.031 393.375 218.25 387.719L60.199 256H304.049C312.859 256 320 248.859 320 240.047V239.953C320 231.141 312.859 224 304.049 224Z" })
  }
));
ReplyClockLight.displayName = "ReplyClockLight";
var ReplyClock_default = ReplyClockLight;
