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
var GameBoardSimple_exports = {};
__export(GameBoardSimple_exports, {
  default: () => GameBoardSimple_default
});
module.exports = __toCommonJS(GameBoardSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GameBoardSimpleThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 248H232V96C232 91.578 228.422 88 224 88H64C59.578 88 56 91.578 56 96V256C56 260.422 59.578 264 64 264H216V416C216 420.422 219.578 424 224 424H384C388.422 424 392 420.422 392 416V256C392 251.578 388.422 248 384 248ZM216 248H72V104H216V248ZM376 408H232V264H376V408ZM384 32H64C28.654 32 0 60.652 0 96V416C0 451.348 28.654 480 64 480H384C419.346 480 448 451.348 448 416V96C448 60.652 419.346 32 384 32ZM432 416C432 442.469 410.467 464 384 464H64C37.533 464 16 442.469 16 416V96C16 69.531 37.533 48 64 48H384C410.467 48 432 69.531 432 96V416Z" })
  }
));
GameBoardSimpleThin.displayName = "GameBoardSimpleThin";
var GameBoardSimple_default = GameBoardSimpleThin;
