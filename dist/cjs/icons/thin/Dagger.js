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
var Dagger_exports = {};
__export(Dagger_exports, {
  default: () => Dagger_default
});
module.exports = __toCommonJS(Dagger_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DaggerThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M344 128H200V8C200 3.578 196.406 0 192 0S184 3.578 184 8V128H40C17.938 128 0 145.938 0 168V192C0 196.422 3.594 200 8 200S16 196.422 16 192V168C16 154.766 26.781 144 40 144H128V424C128 425.641 128.5 427.25 129.438 428.594L185.438 508.594C186.938 510.719 189.375 512 192 512S197.062 510.719 198.562 508.594L254.562 428.594C255.5 427.25 256 425.641 256 424V144H344C357.219 144 368 154.766 368 168V192C368 196.422 371.594 200 376 200S384 196.422 384 192V168C384 145.938 366.062 128 344 128ZM240 421.484L192 490.047L144 421.484V144H240V421.484Z" })
  }
));
DaggerThin.displayName = "DaggerThin";
var Dagger_default = DaggerThin;
